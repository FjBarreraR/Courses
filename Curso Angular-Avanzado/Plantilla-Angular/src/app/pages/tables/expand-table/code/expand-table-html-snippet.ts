export const EXPAND_TABLE_HTML_SNIPPET = `  <div class="table-responsive-sm">
      <table mat-table [dataSource]="dataSource" multiTemplateDataRows>
        @for(column of columnsToDisplay; track column) {
        <ng-container matColumnDef="{{ column }}">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-x-24 p-l-0">
            {{ column | titlecase }}
          </th>
          <td mat-cell *matCellDef="let element" class="p-x-24 f-s-14 p-l-0">
            {{ element[column] }}
          </td>
        </ng-container>
        }

        <ng-container matColumnDef="expand">
          <th mat-header-cell *matHeaderCellDef aria-label="row actions">
            &nbsp;
          </th>
          <td mat-cell *matCellDef="let element">
            <button mat-icon-button aria-label="expand row" (click)="
                expandedElement = expandedElement === element ? null : element;
                $event.stopPropagation()
              ">
              @if(expandedElement !== element) {
              <mat-icon>keyboard_arrow_down</mat-icon>
              } @if(expandedElement === element) {
              <mat-icon>keyboard_arrow_up</mat-icon>
              }
            </button>
          </td>
        </ng-container>

        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
        <ng-container matColumnDef="expandedDetail">
          <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplay.length">
            <div [@detailExpand]="
                element === expandedElement ? 'expanded' : 'collapsed'
              ">
              <div class="p-15 rounded b-1 m-b-16 m-x-18">
                <div class="d-flex align-items-center gap-12">
                  <span
                    class="bg-light-primary text-primary icon-48 rounded f-w-600 d-flex align-items-center justify-content-center">
                    {{ element.symbol }}
                  </span>
                  <div>
                    <div class="f-s-14 f-w-600 ">
                      {{ element.name }}
                    </div>
                    <div class="f-s-14">{{ element.project }}</div>
                  </div>
                </div>

                <div class="f-s-14 m-t-8">
                  {{ element.description }}
                </div>
              </div>
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columnsToDisplayWithExpand"></tr>
        <tr mat-row *matRowDef="let element; columns: columnsToDisplayWithExpand" class="example-element-row"
          [class.example-expanded-row]="expandedElement === element" (click)="
            expandedElement = expandedElement === element ? null : element
          "></tr>
        <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
      </table>
    </div>
`;
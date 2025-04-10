export const MIX_TABLE_HTML_SNIPPET = `  <div class="table-responsive m-t-30">
      <mat-table [dataSource]="dataSource" matSort>
        <!-- ID Column -->
        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16 p-l-0">
            ID
          </mat-header-cell>
          <mat-cell *matCellDef="let row" class="p-l-0">
            {{ row.id }}
          </mat-cell>
        </ng-container>

        <!-- Progress Column -->
        <ng-container matColumnDef="progress">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16">
            Progress
          </mat-header-cell>
          <mat-cell *matCellDef="let row"> {{ row.progress }}% </mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16">
            Name
          </mat-header-cell>
          <mat-cell *matCellDef="let row">
            <div class="d-flex align-items-center gap-12 p-y-16">
              <img src="/assets/images/profile/user-1.jpg" alt="profile" class="rounded-circle" width="40" />
              <span class="f-s-16 f-w-600">{{ row.name }}</span>
            </div>
          </mat-cell>
        </ng-container>

        <!-- Color Column -->
        <ng-container matColumnDef="color">
          <mat-header-cell *matHeaderCellDef mat-sort-header class="f-w-600  f-s-16">
            Color
          </mat-header-cell>
          <mat-cell *matCellDef="let row" [style.color]="row.color">
            {{ row.color }}
          </mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"> </mat-row>
      </mat-table>

      <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
    </div>
`;
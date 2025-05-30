export const HTTP_TABLE_HTML_SNIPPET = `  <div class="example-container">
      @if(isLoadingResults || isRateLimitReached) {
      <div class="example-loading-shade">
        @if(isLoadingResults) {
        <mat-spinner></mat-spinner>
        } @if(isRateLimitReached) {
        <div class="example-rate-limit-reached">
          GitHub's API rate limit has been reached. It will be reset in one
          minute.
        </div>
        }
      </div>
      }

      <div class="example-table-container responsive-table">
        <table mat-table [dataSource]="data" class="example-table" matSort matSortActive="created" matSortDisableClear
          matSortDirection="desc">
          <!-- Number Column -->
          <ng-container matColumnDef="number">
            <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
              #
            </th>
            <td mat-cell *matCellDef="let row">{{ row.number }}</td>
          </ng-container>

          <!-- Title Column -->
          <ng-container matColumnDef="title">
            <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
              Title
            </th>
            <td mat-cell *matCellDef="let row">
              {{ row.title.slice(0, 50) }}...
            </td>
          </ng-container>

          <!-- State Column -->
          <ng-container matColumnDef="state">
            <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
              State
            </th>
            <td mat-cell *matCellDef="let row">
              <span class="bg-light-primary text-primary rounded-pill p-x-8 p-y-4 f-s-12 f-w-500">
                {{ row.state }}
              </span>
            </td>
          </ng-container>

          <!-- Created Column -->
          <ng-container matColumnDef="created">
            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear
              class="f-w-600  f-s-16 p-l-0">
              Created
            </th>
            <td mat-cell *matCellDef="let row" class="p-l-0">
              <div class="d-flex align-items-center gap-8">
                <i-tabler name="calendar-event" class="icon-18"></i-tabler>{{ row.created_at | date }}
              </div>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
      </div>

      <mat-paginator [length]="resultsLength" [pageSize]="30"></mat-paginator>
    </div>
`;
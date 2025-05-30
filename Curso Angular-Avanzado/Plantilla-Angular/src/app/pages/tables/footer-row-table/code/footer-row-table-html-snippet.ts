export const FOOTER_ROW_TABLE_HTML_SNIPPET = `  <div class="table-responsive">
      <table mat-table [dataSource]="transactions" class="w-100">
        <!-- Item Column -->
        <ng-container matColumnDef="item">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16 p-l-0">
            Item
          </th>
          <td mat-cell *matCellDef="let transaction" class="p-l-0">
            <div class="d-flex align-items-center gap-12">
              <img [src]="transaction.img" alt="product" width="45" class="rounded" />
              <span class="f-s-16 f-w-600">{{ transaction.item }} </span>
            </div>
          </td>
          <td mat-footer-cell *matFooterCellDef class="p-l-0 f-w-600">Total</td>
        </ng-container>

        <!-- Cost Column -->
        <ng-container matColumnDef="cost">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-16">
            Cost
          </th>
          <td mat-cell *matCellDef="let transaction">
            {{ transaction.cost | currency }}
          </td>
          <td mat-footer-cell *matFooterCellDef>
            {{ getTotalCost() | currency }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        <tr mat-footer-row *matFooterRowDef="displayedColumns"></tr>
      </table>
    </div>
`;